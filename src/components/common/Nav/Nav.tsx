import Link from 'next/link';
import styles from './styles.module.css';

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
              코스리스트
            </Link>
          </li>
          <li>
            <Link href="/community">
              커뮤니티
            </Link>
          </li>
          <li>
            <Link href="/stampbook">
              스탬프북
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
          로그인
        </Link>
        <Link href="/signup">
          회원가입
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


