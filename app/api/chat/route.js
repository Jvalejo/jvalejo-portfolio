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

    // Build the prompt with system instruction and history
    let contents = [];
    
    // Add system instruction as first user message
    contents.push({
      role: 'user',
      parts: [{ text: SYSTEM_INSTRUCTION }]
    });
    contents.push({
      role: 'model',
      parts: [{ text: 'Understood. I am the Strategic AI Alter-Ego of Jeison Valejo, VP of Product Design at Uphold. How can I help you today?' }]
    });

    // Add conversation history
    if (history && history.length > 0) {
      history.forEach(msg => {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        });
      });
    }

    // Add current message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Call Gemini API directly
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=' + process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;

    return NextResponse.json({ response: text });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate response' },
      { status: 500 }
    );
  }
}