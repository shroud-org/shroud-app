import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
    const { guildId } = params;

    const channels = ["test", "test2"]

    return {
        guildId,
        channels
    };
};