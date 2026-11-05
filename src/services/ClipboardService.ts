/** Copies text to the clipboard, with a fallback for older browsers / non-secure contexts. */
export class ClipboardService {
  static async copy(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return ClipboardService.legacyCopy(text);
    }
  }

  private static legacyCopy(text: string): boolean {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.append(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}
