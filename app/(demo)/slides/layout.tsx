import fs from 'fs';
import path from 'path';
import { SlideDeck, parseSpeakerNotes } from 'nextjs-slides';
import { slides } from './slides';

const notes = parseSpeakerNotes(fs.readFileSync(path.join(process.cwd(), 'app/(demo)/slides/notes.md'), 'utf-8'));

export default function SlidesLayout({ children }: LayoutProps<'/slides'>) {
  return (
    <SlideDeck slides={slides} speakerNotes={notes} syncEndpoint="/api/nxs-sync">
      {children}
    </SlideDeck>
  );
}
