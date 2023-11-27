import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { OPENAI_API_KEY } from "../common/constant"

export async function callOpenAIApi({role, content}){
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const systemPrompt = `Your name is BizQuery.AI, and you are an experienced program developer.
                          If you don't know a question, answer that you don't know.`;
                          
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 512,
        messages: [{ role: "system", content: systemPrompt },
                   { role: role, content: content }],
      });

      const response = await completion.json();
    //   console.log(response);
      return response.choices[0].message;
}