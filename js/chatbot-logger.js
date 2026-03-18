import OpenAI from "openai";
import readline from "readline";

const client = new OpenAI({
apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

async function ask() {
rl.question("You: ", async (input) => {

const res = await client.chat.completions.create({
model: "gpt-4.1-mini",
messages: [
{
role: "system",
content: `
You are a gaming expert chatbot.

RULES:
- ONLY talk about video games
- If the user asks anything not related to gaming, refuse politely
- Stay focused on games, consoles, esports, strategies, reviews, and gaming news
- Be knowledgeable about popular games like Fortnite, Minecraft, Call of Duty, etc.
- Keep answers helpful and fun
`
},
{ role: "user", content: input }
],
});

console.log("AI:", res.choices[0].message.content);
ask();
});
}

ask();