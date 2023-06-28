import { Container } from '@/components/primitive/Container';
import { PostTitle } from './PostTitle';
import { PostAvatar } from './PostAvatar';
import { PostImage } from './PostImage';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostMDX } from './PostContent';

const mockSource = `
# Hello, world!
## This is a test
> This is a quote
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit risus, mattis id egestas quis, iaculis et risus. Duis maximus purus ut justo tincidunt, vitae viverra magna auctor. Etiam quis egestas purus. Ut varius placerat quam a malesuada. Sed non blandit velit. Sed congue id nulla in vulputate. Aenean finibus, eros et lacinia accumsan, nisi nisi ornare est, in porttitor libero neque ac justo. Cras luctus fermentum orci, in vestibulum massa ullamcorper at.
Suspendisse potenti. Nulla facilisi. Etiam bibendum consectetur sollicitudin. Pellentesque odio est, volutpat quis dolor a, feugiat convallis neque. Duis pretium quis tellus at ultricies. Cras porta non urna posuere ullamcorper. Duis vel est a risus interdum blandit. Cras nec auctor nunc. Donec mollis tincidunt mi non tincidunt.

## This is a test
Quisque dapibus leo rhoncus velit lacinia, non eleifend nulla vestibulum. Duis luctus ipsum quis purus ultricies consequat. Curabitur luctus turpis vitae nulla pretium, sed molestie nisl dignissim. Nulla ultrices aliquam laoreet. Mauris luctus purus in ipsum posuere vehicula. Vivamus varius pulvinar risus ut egestas. Sed congue blandit urna, non ultrices orci aliquam accumsan.

Quisque dapibus leo rhoncus velit lacinia, non eleifend nulla vestibulum. Duis luctus ipsum quis purus ultricies consequat. Curabitur luctus turpis vitae nulla pretium, sed molestie nisl dignissim. Nulla ultrices aliquam laoreet. Mauris luctus purus in ipsum posuere vehicula. Vivamus varius pulvinar risus ut egestas. Sed congue blandit urna, non ultrices orci aliquam accumsan.

Quisque dapibus leo rhoncus velit lacinia, non eleifend nulla vestibulum. Duis luctus ipsum quis purus ultricies consequat. Curabitur luctus turpis vitae nulla pretium, sed molestie nisl dignissim. Nulla ultrices aliquam laoreet. Mauris luctus purus in ipsum posuere vehicula. Vivamus varius pulvinar risus ut egestas. Sed congue blandit urna, non ultrices orci aliquam accumsan.

Quisque dapibus leo rhoncus velit lacinia, non eleifend nulla vestibulum. Duis luctus ipsum quis purus ultricies consequat. Curabitur luctus turpis vitae nulla pretium, sed molestie nisl dignissim. Nulla ultrices aliquam laoreet. Mauris luctus purus in ipsum posuere vehicula. Vivamus varius pulvinar risus ut egestas. Sed congue blandit urna, non ultrices orci aliquam accumsan.

Quisque dapibus leo rhoncus velit lacinia, non eleifend nulla vestibulum. Duis luctus ipsum quis purus ultricies consequat. Curabitur luctus turpis vitae nulla pretium, sed molestie nisl dignissim. Nulla ultrices aliquam laoreet. Mauris luctus purus in ipsum posuere vehicula. Vivamus varius pulvinar risus ut egestas. Sed congue blandit urna, non ultrices orci aliquam accumsan.

Quisque dapibus leo rhoncus velit lacinia, non eleifend nulla vestibulum. Duis luctus ipsum quis purus ultricies consequat. Curabitur luctus turpis vitae nulla pretium, sed molestie nisl dignissim. Nulla ultrices aliquam laoreet. Mauris luctus purus in ipsum posuere vehicula. Vivamus varius pulvinar risus ut egestas. Sed congue blandit urna, non ultrices orci aliquam accumsan.

`;

export function Post() {
  return (
    <div>
      <Container includeNavbar className="pb-0">
        <PostTitle>
          7 WAYS TO IMPROVE USABILITY AND ACCESSIBILITY ON YOUR WEBSITE ACROSS
          ALL PLATFORMS
        </PostTitle>
        <PostAvatar />
      </Container>
      <PostImage />
      <Container className="pt-0">
        <MDXRemote
          source={mockSource}
          components={{
            h1: PostMDX.h1,
            h2: PostMDX.h2,
            p: PostMDX.p,
            blockquote: PostMDX.quote
          }}
        />
      </Container>
    </div>
  );
}
