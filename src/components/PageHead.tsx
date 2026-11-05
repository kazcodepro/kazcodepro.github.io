import type { ReactNode } from 'react';
import { HandUnderline } from './HandDrawings';

interface PageHeadProps {
  kicker: string;
  title: string;
  children?: ReactNode;
}

export function PageHead({ kicker, title, children }: PageHeadProps) {
  return (
    <div className="page-head">
      <div className="hand page-head__kicker">{kicker}</div>
      <h1>{title}</h1>
      <div className="hand-underline-wrap" style={{ maxWidth: 320 }}>
        <HandUnderline />
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}
