import { Slide, SlideBadge, SlideSubtitle, SlideTitle } from '../_components/Slide';
import { SlideLink } from '../_components/SlideLink';

export default function Demo1Page() {
  return (
    <Slide>
      <SlideBadge>Demo Route</SlideBadge>
      <SlideTitle className="text-3xl sm:text-4xl md:text-5xl">You navigated here!</SlideTitle>
      <SlideSubtitle>
        This is /slides/demo1 — a standalone route inside the slide deck. No deck navigation, just your content.
      </SlideSubtitle>
      <SlideLink href="/slides/5">← Back to slides</SlideLink>
    </Slide>
  );
}
