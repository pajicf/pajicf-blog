import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import StyledLink from '../components/styled-link';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const title = data.markdownRemark.frontmatter.title;

  return (
    <Layout title={title}>
      <h1>Hi, I'm Filip</h1>
      <p>I'm going to be sharing my thoughts about various <b>Web3</b> related things here. Some occasional light philosophy as well...</p>
      <br/>
      <PostList posts={posts} />
      <StyledLink
        css={`
          display: block;
          margin-top: var(--size-800);
          margin-bottom: var(--size-800);
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
        `}
        to="/blog"
      >
        Find more posts here
      </StyledLink>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 4
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
