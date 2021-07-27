import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, markdownify, logoImage } from '../utils';

export default class FooterText extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const image = _.get(section, 'image');
        const imageUrl = _.get(section, 'image_url');
        const imageAlt = _.get(section, 'image_alt');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');

        return (
            <section className="cell widget widget-text">
                {image &&
                    (imageUrl ? (
                        <Link className="widget-image" href={withPrefix(imageUrl)}>
                            <img src={withPrefix(logoImage)} alt={logoImageAlt} />
                        </Link>
                    ) : (
                        <p className="widget-image">
                            <img src={withPrefix(logoImage)} alt={logoImageAlt} />
                        </p>
                    ))}
                {title && <h2 className="widget-title">{title}</h2>}
                {markdownify(content)}
            </section>
        );
    }
}
