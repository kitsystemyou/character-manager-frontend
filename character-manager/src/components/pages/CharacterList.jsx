import React from "react";
import Header from "../modules/Header";
import CharacterCard from "../modules/CharacterCard";
// import CharacterContainer from "../modules/CharacterContainer";
// import Search from "../modules/Search";

const CharacterList = () => {
    return(
        <div>
            <Header />
            {/* 検索欄はmui v5に対応できてないので一旦保留 */}
            {/* <Search/> */}
            <hr />
            <div>
                <CharacterCard />
            </div>
           
        </div>
    );
}
export default  CharacterList