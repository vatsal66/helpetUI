import React from 'react';
import { navigate } from 'gatsby';

import {
  SideBarTitle,
  SideBarTitleLi, SideBarTitleListHeader,
} from './styled';

const Categories = ({ activeSideCategory, setActiveSideCategory }) => {

  const categoryList = [
    { name: 'Curiosita (8)' },
    { name: 'Documenti (1)' },
    { name: 'Eventi (2)' },
    { name: 'Estate (1)' },
    { name: 'Features (3)' },
    { name: 'Notizie (2)' },
    { name: 'Nutrizione (2)' },
    { name: 'Salute e Benessere (23)' },
    { name: 'Uncategorized (1)' },
    { name: 'Viaggi (4)' },
  ];

  return (
    <>
      <SideBarTitle>Categorie</SideBarTitle>
      <SideBarTitleListHeader>
        {categoryList?.map((item, index) => (
          <SideBarTitleLi
            key={index}
            active={activeSideCategory === item?.name}
            onClick={() => {
              setActiveSideCategory(item?.name);
              navigate('/homeBlog');
            }}
          >
            {item?.name}
          </SideBarTitleLi>
        ))}
      </SideBarTitleListHeader>
    </>
  );
};

export default Categories;