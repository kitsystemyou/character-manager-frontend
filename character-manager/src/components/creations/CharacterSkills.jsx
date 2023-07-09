import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import BasicSkillsEditableTable from "../modules/EditableTable/BasicSkillsEditableTable";
import BattleSkillsEditableTable from "../modules/EditableTable/BattleSkillsEditableTable";
import { Typography } from "@mui/material";

export default function CharacterSkills(props) {
    useEffect(() => props.setCharacterBasicSkills(props.characterBasicSkills), [props]);
    useEffect(() => props.setCharacterBattleSkills(props.characterBattleSkills), [props]);
    useEffect(() => props.setCharacterSkillsTableStatus(props.characterSkillsTableStatus), [props]);

    return (
        <Grid item xs container direction="column">
            <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>基本技能</Typography>
            <Grid item container sx={{ mb: 2 }}>
                <BasicSkillsEditableTable 
                    characterSkills = {props.characterBasicSkills}
                    setCharacterSkills = {props.setCharacterBasicSkills}
                    characterSkillsTableStatus = {props.characterSkillsTableStatus}
                    setCharacterSkillsTableStatus = {props.setCharacterSkillsTableStatus}/>
            </Grid>
            <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>戦闘技能</Typography>
            <Grid item container sx={{ mb: 2 }}>
                <BattleSkillsEditableTable 
                    characterSkills = {props.characterBattleSkills}
                    setCharacterSkills = {props.setCharacterBattleSkills}/>
            </Grid>
        </Grid>
    );
}