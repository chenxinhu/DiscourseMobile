/* @flow */
'use strict'

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@kadira/react-native-storybook';
import HomeSiteRow from '../js/components/home/HomeSiteRow';

storiesOf('HomeSiteRow')
  .addDecorator((story) => (
    <View style={{marginTop: 100, marginLeft: 5, marginRight: 5}}>{story()}</View>
  ))
  .add('Logged out', () => {
    const site = {
      authToken:null,
      description:"Discussion about the next-generation open source Discourse forum software",
      icon:"https://discourse-meta.s3-us-west-1.amazonaws.com/original/3X/c/b/cb4bec8901221d4a646e45e1fa03db3a65e17f59.png",
      title:"Discourse Meta",
      unreadNotifications:null,
      url:"https://meta.discourse.org"
    };
    return <HomeSiteRow site={site}/>;
  })
  .add('With unread notifications', () => {
    const site = {
      authToken: 'xzy',
      description:"Discussion about the next-generation open source Discourse forum software",
      icon:"https://discourse-meta.s3-us-west-1.amazonaws.com/original/3X/c/b/cb4bec8901221d4a646e45e1fa03db3a65e17f59.png",
      title:"Discourse Meta",
      unreadNotifications:10,
      url:"https://meta.discourse.org",
    };
    return <HomeSiteRow site={site}/>;
  })