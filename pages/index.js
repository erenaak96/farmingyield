import Image from 'next/image'
import Header from '../components/Header'
import Button from '../components/Button'
import React, { useState } from "react";
import styles from '../styles/Home.module.scss'
import NumberFormat from 'react-number-format';
const userArr = [
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
  {
    tw: "@notme",
    image: "/img/profile.png",
    earn: "1,492M"
  },
]
export default function Home() {
  const [val, setVal] = useState('');

  return (
    <div>
    <Header />
    {/* OBJECT ORITENTED CSS KULLANIYORUM ASLINDA BOOTSTRAP MANTIGINDA AŞAĞIDAKİ ŞEKİLDE PROJEYE GÖRE OLUŞTURDUĞUM İSKELET 
    ÜZERİNDEN TASKTE MODUL İSTENDİĞİ İÇİN TEK CLASS UZERINDEN YURUDUM DAHA PERFORMANSLI BİR KULLANIMA GİDİLEBİLİR GİBİ GELİYOR */}
    <main className={styles.mainWrapper}>
      <div className={styles.main + ' ' + 'flex flex-a-start flex-between'}>
        <div className={styles.sidebar}>
          <h2>Stone Supply</h2>
          <h3>Lock your EXT to farm stones and redeem exclusive NFTs.</h3>
          <Image src="/img/stone.png" alt="Stone" width={242} height={242} />
          <p className={styles.mbtext}>The farming rate is 1000 stones per EXT every 24 hours.This will lock your EXT in the Ethernity Farming Smart Contract. You may unfarm your EXT anytime you want.If your stones balance is not updating in real-time, try refreshing the page.</p>
        </div>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <h5>EXT Amount</h5>
              <div>
              <NumberFormat 
                thousandSeparator={true}
                pattern="[0-9]*"
                value={val}
                placeholder='Enter EXT Amount'
                onChange={(e) =>
                  setVal((v) => (e.target.validity.valid ? e.target.value : v))
                }
                  />
              
              <span>EXT</span>
            </div>
          </div>
          
          <div className={styles.buttons}>
            <Button label={'Farm'} disabled={Object.keys(val).length > 0 ? false : true}/>
            <Button label={'Unfarm'} disabled={true}/>
          </div>
          <div className={styles.formGroup}>
            <h5>Earned Stones</h5>
            <input type="text" disabled placeholder='-'/>
          </div>
          <div className={styles.formGroup}>
            <h5>EXT Balance</h5>
            <input type="text" disabled placeholder='-'/>
          </div>
          <div className={styles.formGroup}>
            <h5>Locked EXT</h5>
            <input type="text" disabled placeholder='-'/>
          </div>
        </div>
        
        <div className={`${styles["mobileSide"]} ${styles.sidebar}`}>
          <h5>Top Stones Farmers</h5>
          <p>Farmers that have not migrated their stones are not considered.</p>
          <ul>
          {userArr.map((userArr, index) => (
            <li key={index}>
                <span className={styles.number}>{index + 1 + '.'}</span>
                <div className={styles.imageWrapper}>
                  <Image src={userArr.image} alt="Profile" width={32} height={32} />
                  <div className={styles.detail}>
                  <h5>{userArr.tw}</h5>
                  <span>{userArr.earn}</span>
                  </div>
                </div>
            </li>
          ))}
          <hr />
          <li>
                <span className={styles.number}>198.</span>
                <div className={styles.imageWrapper}>
                  <Image src="/img/profile.png" alt="Profile" width={32} height={32} />
                  <div className={styles.detail}>
                  <h5>@yourname</h5>
                  <span>12K</span>
                  </div>
                </div>
            </li>
          </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
