// Using gray-matter and marked
import matter from 'gray-matter';
import { marked } from 'marked';

export function parseMarkdown(markdownContent: string) {
	// Use gray-matter to parse the front matter and content
	const { data: metadata, content } = matter(markdownContent);

	// Use marked to convert markdown content to HTML
	const htmlContent = marked(content);

	return { metadata, htmlContent };
}
