import styles from "./footer.module.css"

function Footer() {
    return (
        <section>
            <footer className={styles.footer}>
                <p>
                    <span className="bold">Get a Pet</span> &copy; 2021
                </p>
            </footer>
        </section>
    )
}

export default Footer