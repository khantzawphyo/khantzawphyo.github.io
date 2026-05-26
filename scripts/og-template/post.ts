import satori from "satori";
import path from "path";
import fs from "fs";

function safeText(text: string): string {
  return text
    .replace(/\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toDataUri(filePath: string): string {
  return `data:image/png;base64,${fs.readFileSync(filePath).toString("base64")}`;
}

export default async (post: {
  data: {
    title: string;
  };
}) => {
  const merriWeatherExtraBoldPath = path.resolve(
    process.cwd(),
    "src/assets/fonts/Merriweather_96pt-ExtraBold.ttf",
  );
  const merriWeatherSemiBoldPath = path.resolve(
    process.cwd(),
    "src/assets/fonts/Merriweather_96pt-SemiBold.ttf",
  );
  const interRegularPath = path.resolve(
    process.cwd(),
    "src/assets/fonts/Inter-Regular.ttf",
  );

  const merriWeatherExtraBoldFontBuffer = fs.readFileSync(
    merriWeatherExtraBoldPath,
  );
  const merriWeatherSemiBoldFontBuffer = fs.readFileSync(
    merriWeatherSemiBoldPath,
  );
  const interRegularFontBuffer = fs.readFileSync(interRegularPath);

  const memojiPath = path.resolve(process.cwd(), "public/memoji.png");
  const memojiDataUri = toDataUri(memojiPath);

  const title = safeText(post.data.title);
  const authorName = "Khant Zaw Phyo";
  const authorEmail = "khantzawphyo02@gmail.com";

  const element = {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#212121",
        padding: "72px 80px",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 24,
            },
            children: [
              {
                type: "h1",
                props: {
                  style: {
                    margin: 0,
                    fontSize: "72px",
                    lineHeight: 1.1,
                    fontFamily: "Merriweather",
                    fontWeight: 800,
                    color: "#f5f5f5",
                    textAlign: "left",
                  },
                  children: title,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 32,
            },
            children: [
              {
                type: "img",
                props: {
                  src: memojiDataUri,
                  width: 120,
                  height: 120,
                  alt: "Author Memoji",
                  style: {
                    borderRadius: "9999px",
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 4,
                  },
                  children: [
                    {
                      type: "p",
                      props: {
                        style: {
                          margin: 0,
                          fontSize: "30px",
                          fontFamily: "Merriweather",
                          fontWeight: 600,
                          color: "#d6d6d6",
                        },
                        children: authorName,
                      },
                    },
                    {
                      type: "p",
                      props: {
                        style: {
                          margin: 0,
                          fontSize: "20px",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          color: "#a5a5a5",
                        },
                        children: authorEmail,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  } as any;

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts: [
      {
        name: "Merriweather",
        data: merriWeatherExtraBoldFontBuffer,
        weight: 800,
        style: "normal",
      },
      {
        name: "Merriweather",
        data: merriWeatherSemiBoldFontBuffer,
        weight: 600,
        style: "normal",
      },
      {
        name: "Inter",
        data: interRegularFontBuffer,
        weight: 400,
        style: "normal",
      },
    ],
  });

  return svg;
};
