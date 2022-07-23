import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context'
import $ from 'jquery'
const ThemeSwitcher = (e) => {
      let {theme} = useContext(ThemeContext);
      const switchTheme = () => {
            $('.themeSwitcher').toggleClass('active')
            $('body').removeClass(theme);
            theme = theme == "dark" ? "light" : "dark";
            $('body').addClass(theme);
      }
  return (
        <div className="themeSwitcher" onClick={switchTheme}>
              <span className="material-symbols-outlined dark">
                    dark_mode
              </span>
              <span className="material-symbols-outlined light">
                    light_mode
              </span>
      </div>
  )
}

export default ThemeSwitcher