import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-logo']}>
        <Link href="/main">
        <img src='../assets/img/logo.svg' width="150px"></img>
        </Link>
      </div>
      <div className={styles['navbar-links']}>
        <ul>
          <li>
            <Link href="/course">
              코스 추천
            </Link>
          </li>
          <li>
            <Link href="/service">
              걷다 즐겨요
            </Link>
          </li>
          <li>
            <Link href="/community">
              같이 걸어요
            </Link>
          </li>
          <li>
            <Link href="/notices">
              공지사항
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-auth']}>
        <Link href="/login">
          <div>
          <Image src="/assets/img/login_lock.svg"
            alt="login_lock"
            width={20}
            height={22}/>
            로그인
          </div>
        </Link>
        <Link href="/signup">
          회원가입
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


