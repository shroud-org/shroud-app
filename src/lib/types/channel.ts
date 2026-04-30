
interface ChannelBase {
    id: string;
    name: string;
    position: number | null;
    parentId: string | null;
    guildId: string;
}

interface TextChannelBase extends ChannelBase {
}

export interface TextChannel extends TextChannelBase {
    channelType: ChannelType.TEXT;
}

export interface VoiceChannel extends ChannelBase {
    channelType: ChannelType.VOICE;
}

export interface ForumChannel extends ChannelBase {
    channelType: ChannelType.FORUM;
}

export interface ThreadChannel extends TextChannelBase {
    channelType: ChannelType.THREAD;
}

export interface DocumentChannel extends ChannelBase {
    channelType: ChannelType.DOCUMENT;
}

export interface AnnouncementChannel extends TextChannelBase {
    channelType: ChannelType.ANNOUNCEMENT;
}

export interface CategoryChannel extends ChannelBase {
    channelType: ChannelType.CATEGORY
}

export enum ChannelType {
    TEXT = "TEXT",
    VOICE = "VOICE",
    FORUM = "FORUM",
    THREAD = "THREAD",
    DOCUMENT = "DOCUMENT",
    ANNOUNCEMENT = "ANNOUNCEMENT",
    CATEGORY = "CATEGORY"
}

export type Channel = TextChannel | VoiceChannel | ForumChannel | ThreadChannel | DocumentChannel | AnnouncementChannel | CategoryChannel;