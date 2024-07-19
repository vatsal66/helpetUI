import React from 'react';

import LeftArrow from '@assets/images/NearMeDetail/leftArrow.svg';
import RightArrow from '@assets/images/NearMeDetail/rightArrow.svg';
import LeftImg from '@assets/images/HomeBlog/HomeBlogPaginationImg.svg';
import TopRightRoad from '@assets/images/common/topRight.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import { PaginationText, LeftTruck, TopRightRoadStyle, SmallGraceStyle } from './styled';

const PaginationHomeBlog = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          gap: '70px',
          position: 'relative',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
          }}>
            <div style={{
              width: '80%',
              margin: '279px auto 216px auto',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <div style={{
                border: '4px solid #007E60',
                background: '#44D3A8',
                borderRadius: '20px',
                padding: '0 10px',
                display: 'flex',
                width: 'fit-content',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRight: '4px solid #007E60',
                  gap: '10px',
                  paddingRight: '10px',
                }}>
                  <LeftArrow />
                  <PaginationText>
                                        Precedente
                  </PaginationText>
                </div>
                <PaginationText style={{ padding: '0 25px', borderRight: '4px solid #007E60' }}>
                                    1
                </PaginationText>
                <PaginationText style={{ padding: '0 25px', borderRight: '4px solid #007E60' }}>
                                    2
                </PaginationText>
                <PaginationText style={{ padding: '0 25px', borderRight: '4px solid #007E60' }}>
                                    ...
                </PaginationText>
                <PaginationText style={{ padding: '0 25px', borderRight: '4px solid #007E60' }}>
                                    5
                </PaginationText>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingLeft: '10px',
                }}>
                  <PaginationText>
                    Successivo
                  </PaginationText>
                  <RightArrow />
                </div>
              </div>
            </div>

            <LeftImg style={LeftTruck} />
          </div>
          <SmallGrace style={SmallGraceStyle}/>
          <TopRightRoad style={TopRightRoadStyle} />
        </div>
      </div>
    </>
  );
};

export default PaginationHomeBlog;