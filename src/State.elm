module State exposing (..)


type alias State =
    ()


type Message
    = Message1
    | Message2


update : Message -> State -> ( State, Cmd Message )
update _ _ =
    Debug.todo "TODO"
