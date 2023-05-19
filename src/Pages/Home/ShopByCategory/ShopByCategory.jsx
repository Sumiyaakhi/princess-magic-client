import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DisneyDoll from './DisneyDoll';
import FrozenDolls from './FrozenDolls';
import AnimationDolls from './AnimationDolls';

const ShopByCategory = () => {
    return (
       <div className='my-12'>
        <h1 className='text-3xl text-center font-bold font-serif pt-8'>Shop By Category</h1>
        <div className="divider"></div>
        <div className='flex justify-center pt-8'>
        <Tabs>
        <TabList>
          <Tab>Disney princes</Tab>
          <Tab>frozen dolls</Tab>
          <Tab>animation characters</Tab>
        </TabList>
    
        <TabPanel>
         <DisneyDoll></DisneyDoll>
        </TabPanel>
        <TabPanel>
         <FrozenDolls></FrozenDolls>
        </TabPanel>
        <TabPanel>
          <AnimationDolls></AnimationDolls>
        </TabPanel>
      </Tabs>
        </div>
       </div>
    );
};

export default ShopByCategory;