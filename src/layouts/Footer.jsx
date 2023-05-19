
const Footer = () => {
  return (
    <footer
      class="text-center text-white"
      style={{ backgroundColor: "#0a4275" }}
    >
         {/* <!--Copyright section--> */}
      <div class="p-4 text-center" style={{ backgroundColor: "#0a4275" }}>
        © 2023 Copyright:
        <p class="text-white">
          &copy;{new Date().getFullYear()} Hazina |All right reserved | Terms of
          service | Privacy
        </p>
      </div>
    </footer>
  );
};
export default Footer;