import { writable } from 'svelte/store'
import type { Tab } from '$lib/types/tab'

export const openTabs = writable<Tab[]>([]);

export function newTab(location: string, title: string) {
    openTabs.update((tabs: Tab[]) => {

        const exists = tabs.some(t => t.location === location)
        if (exists) return tabs;

        return [...tabs, {
            location: location,
            title: title,
            customTitle: null,
        }];
    });
}

export function closeTab(location: string) {
    openTabs.update((tabs) => {
        return tabs.filter(t => t.location !== location)
    })
}

export function setTitle(channelId: string, title: string) {

}