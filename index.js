require("dotenv").config()

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const safteySettings=[
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },

]

const genAI=new GoogleGenerativeAI(process.env.API_KEY)


const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",safteySettings});

async function run(){
   
    const prompt="Write a poem about car"
    const result = await model.generateContent(prompt);
    const response=await result.response
    const text =response.text()
    console.log(text)
}
run()