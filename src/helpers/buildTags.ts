import { boolean } from '@storybook/addon-knobs';
import { typeTags } from '../constants/type-tags';

export const buildTags = (tags: string[]) => {
    for (let tag in typeTags) {
        if (boolean(tag, false, "Tags")) {
            tags.push(tag);
        }
    }
}