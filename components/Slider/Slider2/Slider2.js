"use client"

import React, { useEffect } from 'react';
import Hammer from 'hammerjs';
import './Slider2.css';

const Slider2 = () => {
  useEffect(() => {
    const $ = selector => document.querySelector(selector);

    const next = () => {
      if ($('.hide')) {
        $('.hide').remove();
      }
      if ($('.prev')) {
        $('.prev').classList.add('hide');
        $('.prev').classList.remove('prev');
      }
      $('.act').classList.add('prev');
      $('.act').classList.remove('act');
      $('.next').classList.add('act');
      $('.next').classList.remove('next');
      $('.new-next').classList.remove('new-next');

      const addedEl = document.createElement('li');
      $('.list').appendChild(addedEl);
      addedEl.classList.add('next', 'new-next');
    };

    const prev = () => {
      $('.new-next').remove();
      $('.next').classList.add('new-next');
      $('.act').classList.add('next');
      $('.act').classList.remove('act');
      $('.prev').classList.add('act');
      $('.prev').classList.remove('prev');
      $('.hide').classList.add('prev');
      $('.hide').classList.remove('hide');

      const addedEl = document.createElement('li');
      $('.list').insertBefore(addedEl, $('.list').firstChild);
      addedEl.classList.add('hide');
    };

    const slide = element => {
      if (element.classList.contains('next')) {
        next();
      } else if (element.classList.contains('prev')) {
        prev();
      }
    };

    const slider = $('.list');
    const swipe = new Hammer($('.swipe'));

    slider.onclick = event => {
      slide(event.target);
    };

    swipe.on('swipeleft', next);
    swipe.on('swiperight', prev);
  }, []);

  return (
    <>
      <ul className="list">
        <li className="hide"></li>
        <li className="prev"></li>
        <li className="act"></li>
        <li className="next"></li>
        <li className="next new-next"></li>
      </ul>
      <div className="swipe"></div>
    </>
  );
};

export default Slider2;
