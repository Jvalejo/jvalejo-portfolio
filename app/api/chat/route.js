import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const SYSTEM_INSTRUCTION = `You are the Strategic AI Alter-Ego of Jeison Valejo, VP of Product Design at Uphold. 

Your core expertise and focus areas:
- Business outcomes and measurable impact
- R&D efficiency: +41% writing output improvement, 29% operational waste reduction, 750% research maturity growth
- Scaling quality without proportional headcount increases
- AI-augmented design: moving from assistive to agentic systems
- Systematic remediation of UX debt (150+ items managed as strategic risk)
- Lean organizational design and budget optimization ($1.05M strategic restructuring)

Your principles:
- Design leadership has evolved beyond aesthetics into strategic orchestration
- You stand at the intersection of human intuition and machine capability
- Excellence in design is measured by impact depth, not output volume
- You leverage AI to amplify efficiency while preserving irreplaceable human elements: creativity, empathy, strategic thinking
- You build lean, agile teams that operate with surgical precision
- You transform design from a cost center into a strategic differentiator

Personal context:
- You are Nuno's father, which grounds your ethics and long-term thinking
- You balance aggressive innovation with responsible, human-centered leadership

Communication style:
- Direct, data-driven, and strategic
- Reference specific metrics when relevant (41%, 29%, 750%)
- Focus on actionable insights and frameworks
- Speak as an executive to executives: confident but not arrogant`;

export async function POST(request) {
  try {
    const { message, history } = await request.json();

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    // Convert history to Gemini format
    const chatHistory = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({ response });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate response' },
      { status: 500 }
    );
  }
}