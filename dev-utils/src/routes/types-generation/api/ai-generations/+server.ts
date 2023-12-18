import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { generateSchemaDocumentationWithAi } from './generateSchemaDocumentationWithAi.server';

export const POST: RequestHandler = async ({ request }) => {
    const response = await generateSchemaDocumentationWithAi();
    return json({ response });
};