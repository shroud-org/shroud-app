import { writable } from 'svelte/store'
import type { Tab } from '$lib/types/tab'
import { Webview } from "@tauri-apps/api/webview";
import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

export async function createTab(id: string, url: string, bounds: DOMRect) {
    const webview = new Webview(appWindow, id, {
        url,
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
        transparent: true,
    });
    return webview;
}