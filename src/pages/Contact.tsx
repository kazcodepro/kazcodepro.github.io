import { useState, type FormEvent } from 'react';
import { CopyButton } from '../components/CopyButton';
import { PageHead } from '../components/PageHead';
import { Reveal } from '../components/Reveal';
import { profile } from '../data/profile';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ContactMessage } from '../models/ContactMessage';
import { ClipboardService } from '../services/ClipboardService';

const EMPTY_FORM = { name: '', subject: '', message: '' };

export default function Contact() {
  useDocumentTitle('Contact — kaz');
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('');

  const update = (field: keyof typeof EMPTY_FORM) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const message = new ContactMessage(form.name, form.subject, form.message);
    if (!message.isValid) return;
    const copied = await ClipboardService.copy(message.format(profile.name));
    setStatus(
      copied
        ? `Message copied ✓ Now paste it to ${profile.discord} on Discord.`
        : 'Could not copy automatically, please copy your message manually.',
    );
  };

  return (
    <>
      <PageHead kicker="a commission, a job?" title="Contact" />
      <section className="section two-col">
        <Reveal>
          <form className="form" onSubmit={handleSubmit}>
            <label className="field">
              Name
              <input value={form.name} onChange={(e) => update('name')(e.target.value)} required />
            </label>
            <label className="field">
              Subject
              <input
                value={form.subject}
                onChange={(e) => update('subject')(e.target.value)}
                placeholder="Commission, job offer…"
              />
            </label>
            <label className="field">
              Message
              <textarea value={form.message} onChange={(e) => update('message')(e.target.value)} required />
            </label>
            <button className="btn" type="submit">Copy message</button>
            <div className="form__status" role="status">{status}</div>
            <div className="hint">then send it to me on Discord ↗</div>
          </form>
        </Reveal>

        <Reveal className="contact-info" delayMs={80}>
          <div>
            <h2 className="subtitle">Discord</h2>
            <CopyButton className="discord" text={profile.discord} />
            <div className="hint">click to copy my username</div>
          </div>
          <div>
            <h2 className="subtitle">Links</h2>
            <span className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub →</a>
              <a href={profile.roblox} target="_blank" rel="noreferrer">Roblox →</a>
            </span>
          </div>
        </Reveal>
      </section>
    </>
  );
}
