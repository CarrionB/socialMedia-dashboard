import React from 'react';
import Card from './Card'
import './topCardList.css'

const cardListData = [
  {
    username: '@CarrionB',
    id: 1,
    followers: '252',
    todayFollowers: 3,
    icon: 'images/icon-facebook.svg',
    name: 'facebook'
  },
  {
    username: '@CarrionB',
    id: 2,
    followers: '252',
    todayFollowers: 5,
    icon: 'images/icon-twitter.svg',
    name: 'twitter'
  },
  {
    username: '@CarrionB',
    id: 3,
    followers: '252',
    todayFollowers: 4,
    icon: 'images/icon-instagram.svg',
    name: 'instagram'
  },
  {
    username: '@CarrionB',
    id: 4,
    followers: '252',
    todayFollowers: -2,
    icon: 'images/icon-youtube.svg',
    name: 'youtube'
  },
]

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map((value, key) => 
              <Card key= {value.id} {...value} />
            )
          }
          {/* <article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="" />
            @LeonidasEsteban
          </p>
            <p className="card-followers">
              <span className="card-followers-number">28k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
            12 Today
          </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
            @LeonidasEsteban
          </p>
            <p className="card-followers">
              <span className="card-followers-number">6k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
            12 Today
          </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="" />
            @LeonidasEsteban
          </p>
            <p className="card-followers">
              <span className="card-followers-number">12k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
            12 Today
          </p>
          </article> */}
        </div>
      </div>
    </section>
  )
}

export default TopCardList;