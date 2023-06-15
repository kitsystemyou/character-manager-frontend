import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import BasicSkillsEditableTable from "../modules/EditableTable/BasicSkillsEditableTable";
import BattleSkillsEditableTable from "../modules/EditableTable/BattleSkillsEditableTable";
import { Typography } from "@mui/material";

export default function CharacterSkills(props) {
    useEffect(() => props.setCharacterSkills(props.characterSkills), [props]);

    return (
        <Grid item xs container direction="column">
            <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>基本技能</Typography>
            <Grid item container sx={{ mb: 2 }}>
                <BasicSkillsEditableTable 
                    characterSkills = {props.characterSkills}
                    setCharacterSkills = {props.setCharacterSkills}/>
            </Grid>
            <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>戦闘技能</Typography>
            <Grid item container sx={{ mb: 2 }}>
                <BattleSkillsEditableTable 
                    characterSkills = {props.characterSkills}
                    setCharacterSkills = {props.setCharacterSkills}/>
            </Grid>
        </Grid>
    );
}