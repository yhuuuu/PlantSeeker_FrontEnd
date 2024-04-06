
import './footer.css'
function Footer() {
        return (
                <div className='container footer-container'>
                        <footer class="py-3 my-4">
                                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                                        <li class="nav-item"><a href="contact" class="nav-link px-2 text-body-secondary"><h6>Contact</h6></a></li>
                                        <li class="nav-item"><a href="https://www.linkedin.com/in/yutinghu3/" class="nav-link px-2 text-body-secondary"><h6>About</h6></a></li>
                                        <li class="nav-item"><a href="credits" class="nav-link px-2 text-body-secondary"><h6>Credits</h6></a></li>
                                </ul>
                                <p class="text-center text-body-secondary">© 2024 Plant Seeker</p>
                        </footer>
                </div>
        )
}

export default Footer