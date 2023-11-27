import React from 'react'
import Action from '../action/action'
import Adventure from '../adventure/adventure';
import Comedy from '../comedy/comedy';
import Crime from '../crime/crime';
import Documentary from '../documentary/documentry';
import Drama from '../drama/drama';
import Family from '../family/family';
import Fantasy from '../fantasy/fantasy';
import Horror from '../horrer/horrer';
import Mystery from '../mystery/mystery';
import Romance from '../romance/romance';
import Sciencefix from '../sci_fiction/scifixtion';
import Thriller from '../thriller/thriller';
import Trendingnow from '../trending_now/trendingnow';
// import SearchBar from '../search/search';

const secndpage = () => {
  return (
    <>
        <Trendingnow/>
    <Action/>
    <Adventure/>
    <Comedy/>
    <Crime/>
    <Documentary/>
    <Drama/>
    <Family/>
    <Fantasy/>
    <Horror/>
    <Mystery/>
    <Romance/>
    <Sciencefix/>
    <Thriller />
    

    </>
  )
}

export default secndpage