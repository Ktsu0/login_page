import styles from "./login_page.module.scss"
import FrameLogin from "../../components/ui/frameLogin/FrameLogin";


function LoginPages() {
    return (
        <div className={styles.Body}>
            <FrameLogin />
        </div>

    );
}

export default LoginPages;
