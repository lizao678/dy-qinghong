import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome'

import styles from './page.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.w1200}>
          <div class='header-left'>
            <span>
              <FontAwesomeIcon icon={["fal", "coffee"]} />
              18685417929
            </span>
            <span>
              1129422384@qq.com
            </span>
          </div>
          <div class='header-right'>
            <a
              href='javascript:void(0)'
              onclick='SetHome(this,window.location)'
            >
              <i class='fa fa-home'></i>设为首页
            </a>
            <a
              href='javascript:void(0)'
              onclick='shoucang(document.title,window.location)'
            >
              <i class='fa fa-plus-square'></i>加入收藏
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}
