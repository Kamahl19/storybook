import React from 'react';

import Sidebar from './Sidebar';
import { standardData as standardHeaderData } from './SidebarHeading.stories';
// @ts-ignore
import { withRootData } from './SidebarStories.stories';

export default {
  Component: Sidebar,
  title: 'UI|Sidebar/Sidebar',
  excludeStories: /.*Data$/,
};

const { menu } = standardHeaderData;
const { stories, storyId } = withRootData;

export const simpleData = { menu, stories, storyId };
export const loadingData = { menu, stories: {} };

export const simple = () => <Sidebar menu={menu} stories={stories} storyId={storyId} />;
export const loading = () => <Sidebar menu={menu} stories={{}} loading />;