import { Fragment } from 'react';
import { announcements, languages } from '../data/profile';
import { Marquee } from './Marquee';

const repeat = (times: number) => Array.from({ length: times }, (_, i) => i);

/** Big tilted banner at the bottom of every page. */
export function Ribbon() {
  return (
    <section className="ribbons" aria-label="Availability">
      <div className="ribbon ribbon--solid">
        <Marquee seconds={50}>
          {repeat(2).map((r) =>
            announcements.map((text) => (
              <Fragment key={`${r}-${text}`}>
                <span className="ribbon__item">
                  <span className="ribbon__stars">★★★★★</span>
                  {text}
                </span>
                <span className="ribbon__sep">✦</span>
              </Fragment>
            )),
          )}
        </Marquee>
      </div>
      <div className="ribbon ribbon--outline" aria-hidden="true">
        <Marquee seconds={40} reverse>
          {repeat(2).map((r) =>
            languages.map((lang) => (
              <Fragment key={`${r}-${lang}`}>
                <span>{lang}</span>
                <span>★</span>
              </Fragment>
            )),
          )}
        </Marquee>
      </div>
    </section>
  );
}
