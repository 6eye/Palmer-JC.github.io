// File generated with VoiceSync.ts version: 1.0 on Thu Sep 07 2017
// holy crap batman
// HH^0+4!SCARED@8 OW1 L IY0_K^2 R AE1^3 P_B^4 AE1 T M AE2 N_

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var VoiceSync;
(function (VoiceSync) {
    /**
     * Call this as early as possible, so the sound can already be downloaded.
     * Passing in full path, in case decided to convert .WAV to .MP3, or otherwise need to change name of file
     */
    var batman = (function (_super) {
        __extends(batman, _super);
        function batman(fullPathUrl, scene, deleteOnceSaid) {
            _super.call(this, "VoiceSync", fullPathUrl, scene);
            if (deleteOnceSaid) {
                var ref = this;
                this.onended = function() { ref.dispose(); }
            }
        }
        /**
         * @returns QI.MotionEvent[], so these may be further paired with other events using syncPartner() or option.requireCompletionOf.
         */
        batman.prototype.say = function(automaton, isFirstSentence, isLastSentence) {
            var ref = this;
            var deforms = new Array(12);
            deforms[0] = new QI.VertexDeformation("FACE", "BASIS", ["AW-OW", "SCARED_TALK"], [1, 0.8], 337.55, null, null, {sound : ref});
            deforms[1] = new QI.VertexDeformation("FACE", "BASIS", ["L", "SCARED_TALK"], [1, 0.8], 175, null, null, null);
            deforms[2] = new QI.VertexDeformation("FACE", "BASIS", [".", "SCARED_TALK"], [1, 0.8], 75, null, null, null);
            deforms[3] = new QI.VertexDeformation("FACE", "BASIS", ["ER-R-W", "SCARED_TALK"], [1, 0.8], 93.8, null, null, {millisBefore: 175});
            deforms[4] = new QI.VertexDeformation("FACE", "BASIS", ["AE-EH", "SCARED_TALK"], [1, 0.8], 150, null, null, null);
            deforms[5] = new QI.VertexDeformation("FACE", "BASIS", ["B-M-P", "SCARED_TALK"], [1, 0.8], 225, null, null, null);
            deforms[6] = new QI.VertexDeformation("FACE", "BASIS", ["B-M-P", "SCARED_TALK"], [1, 0.8], 112.5, null, null, {millisBefore: 100});
            deforms[7] = new QI.VertexDeformation("FACE", "BASIS", ["AE-EH", "SCARED_TALK"], [1, 0.8], 131.25, null, null, null);
            deforms[8] = new QI.VertexDeformation("FACE", "BASIS", ["B-M-P", "SCARED_TALK"], [1, 0.8], 75, null, null, null);
            deforms[9] = new QI.VertexDeformation("FACE", "BASIS", ["AE-EH", "SCARED_TALK"], [1, 0.8], 268.75, null, null, null);
            deforms[10] = new QI.VertexDeformation("FACE", "BASIS", [".", "SCARED_TALK"], [1, 0.8], 75, null, null, null);
            deforms[11] = function() { automaton.setCurrentMood("SCARED", 0.8, !isLastSentence); }

            if (!isFirstSentence) automaton.queueSingleEvent(new QI.Stall(300, "FACE"));
            automaton.queueEventSeries(new QI.EventSeries(deforms, 1, 1, "FACE"));
            return deforms;
        };
        var newStateNames;
        /**
         * Call this as early as possible on the mesh passed after addStockExpressions() has been called.
         */
        batman.prototype.precompile = function(automaton) {
            newStateNames = new Array(12);
            var faceGrp = automaton.getShapeKeyGroup("FACE");
            newStateNames[0] = faceGrp.addComboDerivedKey("BASIS", ["AW-OW", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[1] = faceGrp.addComboDerivedKey("BASIS", ["L", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[2] = faceGrp.addComboDerivedKey("BASIS", [".", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[3] = faceGrp.addComboDerivedKey("BASIS", ["ER-R-W", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[4] = faceGrp.addComboDerivedKey("BASIS", ["AE-EH", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[5] = faceGrp.addComboDerivedKey("BASIS", ["B-M-P", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[6] = faceGrp.addComboDerivedKey("BASIS", ["B-M-P", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[7] = faceGrp.addComboDerivedKey("BASIS", ["AE-EH", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[8] = faceGrp.addComboDerivedKey("BASIS", ["B-M-P", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[9] = faceGrp.addComboDerivedKey("BASIS", ["AE-EH", "SCARED_TALK"], [1, 0.8], null);
            newStateNames[10] = faceGrp.addComboDerivedKey("BASIS", [".", "SCARED_TALK"], [1, 0.8], null);
        };
        /**
         * @returns QI.MotionEvent[], so these may be further paired with other events using syncPartner() or option.requireCompletionOf.
         */
        batman.prototype.sayCompiled = function(automaton, isFirstSentence, isLastSentence) {
            var ref = this;
            var deforms = new Array(12);
            deforms[0] = new QI.Deformation("FACE", newStateNames[0], 1, 337.55, null, null, {sound : ref});
            deforms[1] = new QI.Deformation("FACE", newStateNames[1], 1, 175, null, null, null);
            deforms[2] = new QI.Deformation("FACE", newStateNames[2], 1, 75, null, null, null);
            deforms[3] = new QI.Deformation("FACE", newStateNames[3], 1, 93.8, null, null, {millisBefore: 175});
            deforms[4] = new QI.Deformation("FACE", newStateNames[4], 1, 150, null, null, null);
            deforms[5] = new QI.Deformation("FACE", newStateNames[5], 1, 225, null, null, null);
            deforms[6] = new QI.Deformation("FACE", newStateNames[6], 1, 112.5, null, null, {millisBefore: 100});
            deforms[7] = new QI.Deformation("FACE", newStateNames[7], 1, 131.25, null, null, null);
            deforms[8] = new QI.Deformation("FACE", newStateNames[8], 1, 75, null, null, null);
            deforms[9] = new QI.Deformation("FACE", newStateNames[9], 1, 268.75, null, null, null);
            deforms[10] = new QI.Deformation("FACE", newStateNames[10], 1, 75, null, null, null);
            deforms[11] = function() { automaton.setCurrentMood("SCARED", 0.8, !isLastSentence); }

            if (!isFirstSentence) automaton.queueSingleEvent(new QI.Stall(300, "FACE"));
            automaton.queueEventSeries(new QI.EventSeries(deforms, 1, 1, "FACE"));
            return deforms;
        };
        return batman;
    }(BABYLON.Sound));
    VoiceSync.batman = batman;
})(VoiceSync || (VoiceSync = {}));
