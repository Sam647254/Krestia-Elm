module Main exposing (..)

import Browser
import Browser.Navigation exposing (Key)
import Routing exposing (onUrlChange, onUrlRequest)
import State exposing (Message, State, update)
import Url exposing (Url)
import View exposing (view)


main : Program () State Message
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        , onUrlChange = onUrlChange
        , onUrlRequest = onUrlRequest
        }


init : () -> Url -> Key -> ( State, Cmd Message )
init _ url key =
    Debug.todo "TODO"
