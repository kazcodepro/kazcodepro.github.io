import { useState } from 'react';
import { ClipboardService } from '../services/ClipboardService';

interface CopyButtonProps {
  text: string;
  className?: string;
}

/** A button that shows `text` and copies it on click. */
export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (await ClipboardService.copy(text)) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {copied ? 'Copied ✓' : text}
    </button>
  );
}
