/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    // FIXME: this is a second argument but for some reason /en/ links don't work.
    let language = "";

    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
  }

  pageUrl(doc) {
    // FIXME: this is a second argument but for some reason /en/ links don't work.
    let language = "";

    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && <img src={this.props.config.baseUrl + this.props.config.footerIcon} alt={this.props.config.title} width="66" height="58" />}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("documentation-intro", this.props.language)}>Intro</a>
            <a href={this.docUrl("getting-started", this.props.language)}>Get Started</a>
            <a href={this.docUrl("feature-1", this.props.language)}>Feature 1</a>
          </div>
          
          <% if (twitter) { %>
            <div>
              <h5>Community</h5>

              <a href="https://twitter.com/<%= twitter %>" target="_blank" rel="noreferrer noopener">
                Twitter
              </a>
            </div>
          <% } %>
      
          <div>
            <h5>More</h5>
            <a href="https://www.github.com/<%= author %>/<%= githubProject %>">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/<%= author %>/<%= githubProject %>/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <section className="generated-details">
          <p>
            Generated with{" "}
            <a className="highlight" href="https://github.com/boyney123/generator-create-docusaurus" target="_blank" rel="noreferrer noopener">
              generator-create-docusaurus
            </a>{" "}
            built by{" "}
            <a className="highlight" href="https://twitter.com/boyney123" target="_blank" rel="noreferrer noopener">
              boyney123
            </a>
          </p>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
