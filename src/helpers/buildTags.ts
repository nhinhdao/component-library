import { boolean } from '@storybook/addon-knobs';

export const buildTags = (tags: string[], collection: any) => {
    for (let tag in collection) {
        if (boolean(tag, false)) {
            tags.push(tag);
        }
    }
}