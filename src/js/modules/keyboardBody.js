export default function keyboardBody(){
    document.body.innerHTML = `
    <div class="wrapper">
    <div class="container">
        <h1 class="title"> Virtual Keyboard</h1>
        <textarea class="textarea" rows="6" cols="70"></textarea>
        <div class="keyboard">
            <div class="keyboard__row">
                <div data-code="Backquote" class="keyboard__key">
                    <div  class="symbol eng">
                        <span>\`</span><span class="hidden">~</span>
                    </div>
                    <div class="letter ru hidden">ё</div>
                </div>
                <div data-code="Digit1" class="keyboard__key ">
                    <div  class="symbol eng">
                        <span>1</span><span class="hidden">!</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>1</span><span class="hidden">!</span>
                    </div>
                </div>
                <div data-code="Digit2" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>2</span><span class="hidden">@</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>2</span><span class="hidden">"</span>
                     </div>
                </div>
                <div data-code="Digit3" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>3</span><span class="hidden">#</span>
                    </div>
                    <div class="symbol ru hidden">
                    <span>3</span><span class="hidden">№</span>
                    </div>
                </div>
                <div data-code="Digit4" class="keyboard__key">
                    <div class="symbol eng">
                        <span>4</span><span class="hidden">$</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>4</span><span class="hidden">;</span>
                     </div>
                </div>
                <div data-code="Digit5" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>5</span><span class="hidden">%</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>5</span><span class="hidden">%</span>
                     </div>
                </div>
                <div data-code="Digit6" class="keyboard__key">
                    <div class="symbol eng">
                        <span>6</span><span class="hidden">^</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>6</span><span class="hidden">:</span>
                     </div>
                </div>
                <div data-code="Digit7" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>7</span><span class="hidden">&amp;</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>7</span><span class="hidden">?</span>
                     </div>
                </div>
                <div data-code="Digit8" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>8</span><span class="hidden">*</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>8</span><span class="hidden">*</span>
                     </div>
                </div>
                <div data-code="Digit9" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>9</span><span class="hidden">(</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>9</span><span class="hidden">(</span>
                     </div>
                </div>
                <div data-code="Digit0" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>0</span><span class="hidden">)</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>7</span><span class="hidden">)</span>
                     </div>
                </div>
                <div data-code="Minus" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>-</span><span class="hidden">_</span>
                    </div>
                    <div class="symbol ru hidden">
                        <span>-</span><span class="hidden">_</span>
                     </div>
                </div>
                <div data-code="Equal" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>=</span><span class="hidden">+</span>
                    </div>
                    <div class="symbol ru hidden">
                    <span>=</span><span class="hidden">+</span>
                 </div>
                </div>
                <div data-code="Backspace" class="keyboard__key backspace color-btn"> Backspace </div>
                
            </div>
            <div class="keyboard__row">
                <div data-code="Tab" class="keyboard__key tab color-btn">Tab</div>

                <div data-code="KeyQ" class="keyboard__key ">
                    <div class="letter eng">q</div>
                    <div class="letter ru hidden">й</div>
                </div>
                <div data-code="KeyW"  class="keyboard__key">
                    <div class="letter eng">w</div>
                    <div class="letter ru hidden">ц</div>
                </div>
                <div data-code="KeyE" class="keyboard__key ">
                    <div class="letter eng">e</div>
                    <div class="letter ru hidden">у</div>
                </div>
                <div data-code="KeyR" class="keyboard__key ">
                    <div class="letter eng">r</div>
                    <div class="letter ru hidden">к</div>
                </div>
                <div data-code="KeyT" class="keyboard__key ">
                    <div class="letter eng">t</div>
                    <div class="letter ru hidden">е</div>
                </div>
                <div data-code="KeyY" class="keyboard__key ">
                    <div class="letter eng"> y</div>
                    <div class="letter ru hidden">н</div>
                </div>
                <div data-code="KeyU" class="keyboard__key ">
                    <div class="letter eng">u</div>
                    <div class="letter ru hidden">г</div>
                </div>
                <div data-code="KeyI" class="keyboard__key ">
                    <div class="letter eng">i</div>
                    <div class="letter ru hidden">ш</div>
                </div>
                <div data-code="KeyO" class="keyboard__key ">
                    <div class="letter eng">o</div>
                    <div class="letter ru hidden">щ</div>
                </div>
                <div data-code="KeyP" class="keyboard__key ">
                    <div class="letter eng">p</div>
                    <div class="letter ru hidden">з</div>   
                </div>

                <div data-code="BracketLeft" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>[</span><span class="hidden">{</span>
                    </div>
                    <div class="letter ru hidden">х</div> 
                </div>
                <div data-code="BracketRight" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>]</span>
                        <span class="hidden">}</span>
                    </div>
                    <div class="letter ru hidden">ъ</div> 
                </div>
                <div data-code="Backslash" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>\\</span>
                        <span class="hidden">|</span>
                    </div>
                     <div class="symbol ru hidden">
                        <span>\\</span>
                        <span class="hidden">|</span>
                    </div>
                </div>

                <div data-code="Delete" class="keyboard__key del color-btn">Del</div> 
                
                
                
            </div>
            <div class="keyboard__row">
                <div data-code="CapsLock" class="keyboard__key capslock color-btn">CapsLock</div>

                <div data-code="KeyA"  class="keyboard__key ">
                    <div class="letter eng">a</div>
                    <div class="letter ru hidden">ф</div>
                </div>
                <div data-code="KeyS" class="keyboard__key ">
                    <div class="letter eng">s</div>
                    <div class="letter ru hidden">ы</div>
                </div>
                <div data-code="KeyD" class="keyboard__key ">
                    <div class="letter eng">d</div>
                    <div class="letter ru hidden">в</div>
                </div>
                <div data-code="KeyF" class="keyboard__key ">
                    <div class="letter eng">f</div>
                    <div class="letter ru hidden">а</div>
                </div>
                <div data-code="KeyG" class="keyboard__key ">
                    <div class="letter eng">g</div>
                    <div class="letter ru hidden">п</div>
                </div>
                <div data-code="KeyH" class="keyboard__key ">
                    <div class="letter eng">h</div>
                    <div class="letter ru hidden">р</div>
                </div>
                <div data-code="KeyJ" class="keyboard__key ">
                    <div class="letter eng">j</div>
                    <div class="letter ru hidden">о</div>
                </div>
                <div data-code="KeyK" class="keyboard__key ">
                    <div class="letter eng">k</div>
                    <div class="letter ru hidden">л</div>
                </div>
                <div data-code="KeyL" class="keyboard__key ">
                    <div class="letter eng">l</div>
                    <div class="letter ru hidden">д</div>
                </div>

                <div data-code="Semicolon" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>;</span>
                        <span class="hidden">:</span>
                    </div>
                    <div class="letter ru hidden">ж</div>
                </div>
                <div data-code="Quote" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>'</span>
                        <span class="hidden">"</span>
                    </div>
                    <div class="letter ru hidden">э</div>
                </div>
                <div data-code="Enter" class="keyboard__key enter color-btn">Enter</div>
                
                
                
            </div>
            <div class="keyboard__row">
                <div data-code="ShiftLeft" class="keyboard__key left-shift color-btn">Shift</div>

                <div data-code="KeyZ" class="keyboard__key ">
                    <div class="letter eng">z</div>
                    <div class="letter ru hidden">я</div>
                </div>
                <div  data-code="KeyX" class="keyboard__key ">
                    <div class="letter eng">x</div>
                    <div class="letter ru hidden">ч</div>
                </div>
                <div data-code="KeyC" class="keyboard__key ">
                    <div class="letter eng">с</div>
                    <div class="letter ru hidden">c</div>
                </div>
                <div data-code="KeyV" class="keyboard__key ">
                    <div class="letter eng">v</div>
                    <div class="letter ru hidden">м</div>
                </div>
                <div data-code="KeyB" class="keyboard__key ">
                    <div class="letter eng">b</div>
                    <div class="letter ru hidden">и</div>
                </div>
                <div data-code="KeyN" class="keyboard__key ">
                    <div class="letter eng">n</div>
                    <div class="letter ru hidden">т</div>
                </div>
                <div data-code="KeyM" class="keyboard__key ">
                    <div class="letter eng">m</div>
                    <div class="letter ru hidden">ь</div>
                </div>
                <div data-code="Comma" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>,</span>
                        <span class="hidden">&lt;</span>
                    </div>
                    <div class="letter ru hidden">б</div>
                </div>
                <div data-code="Period" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>.</span>
                        <span class="hidden">&gt;</span>
                    </div>
                    <div class="letter ru hidden">ю</div>
                </div>
                <div data-code="Slash" class="keyboard__key ">
                    <div class="symbol eng">
                        <span>/</span>
                        <span class="hidden">?</span>
                    </div>
                    <div class="symbol ru hidden">
                    <span>.</span>
                    <span class="hidden">,</span>
                </div>
                </div>
                <div data-code="ArrowUp" class="keyboard__key arrow-top color-btn">&uarr;</div>
                <div data-code="ShiftRight" class="keyboard__key right-shift color-btn">Shift</div>
                
                
                
            </div>
            <div class="keyboard__row">
                <div data-code="ControlLeft" class="keyboard__key left-ctrl color-btn">Ctrl</div>
                <div  data-code="MetaLeft" class="keyboard__key win color-btn">Win</div>
                <div data-code="AltLeft" class="keyboard__key left-alt color-btn">Alt</div> 
                <div data-code="Space"  class="keyboard__key space"></div>
                <div data-code="AltRight" class="keyboard__key right-alt color-btn">Alt</div>
                <div data-code="ArrowLeft" class="keyboard__key arrow-left color-btn">&larr;</div>
                <div data-code="ArrowDown" class="keyboard__key arrow-bottom color-btn">&darr;</div>
                <div data-code="ArrowRight" class="keyboard__key arrow-right color-btn">&rarr;</div>
                <div data-code="ControlRight" class="keyboard__key ctrl color-btn">Ctrl</div>
                
            </div>
        
        </div>
        <div class="lang">
            <div class="eng">Change language: Ctrl+Shift</div>
            <div class="ru hidden">Сменить язык: Ctrl+Shift</div>
        </div>
   </div>
</div>
    ` ;

    
}

