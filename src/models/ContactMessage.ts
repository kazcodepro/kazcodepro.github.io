/** A message written in the contact form, ready to be pasted to Discord. */
export class ContactMessage {
  constructor(
    private readonly name: string,
    private readonly subject: string,
    private readonly body: string,
  ) {}

  get isValid(): boolean {
    return this.name.trim().length > 0 && this.body.trim().length > 0;
  }

  format(recipient: string): string {
    const subject = this.subject.trim() ? ` | ${this.subject.trim()}` : '';
    return `Hi ${recipient}! ${this.body.trim()}\n\n— ${this.name.trim()}${subject}`;
  }
}
