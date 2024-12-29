const commentsData: Record<string, string[]> = {};

export function getComments(slug: string): string[] {
  return commentsData[slug] || [];
}

export function addComment(slug: string, comment: string): void {
  if (!commentsData[slug]) {
    commentsData[slug] = [];
  }
  commentsData[slug].push(comment);
}