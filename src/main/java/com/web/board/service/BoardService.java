package com.web.board.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.web.board.exception.ResourceNotFoundException;
import com.web.board.model.Board;
import com.web.board.repository.BoardRepository;

@Service
public class BoardService {

	@Autowired
	private BoardRepository boardRepository;
	
	public int findAllCount() {
		return (int) boardRepository.count();
	}
/*
	// get paging boards data
	public ResponseEntity<Map> getPagingBoard(Integer p_num) {
		Map result = null;
		
		PagingUtil pu = new PagingUtil(p_num, 5, 5); 
		List<Board> list = boardRepository.findFromTo(pu.getObjectStartNum(), pu.getObjectCountPerPage());
		pu.setObjectCountTotal(findAllCount());
		pu.setCalcForPaging();
		
		System.out.println("p_num : "+p_num);
		System.out.println(pu.toString());
		
		if (list == null || list.size() == 0) {
			return null;
		}
		
		result = new HashMap<>();
		result.put("pagingData", pu);
		result.put("list", list);
		
		return ResponseEntity.ok(result);
	}	
*/
	// get boards data
	public List<Board> getAllBoard() {
		return boardRepository.findAll();
	}
	
	// create board
	public Board createBoard(Board board) {
		return boardRepository.save(board);
	}
	
	// get board one by id
	public ResponseEntity<Board> getBoard(Integer itemno) {
		Board board = boardRepository.findById(itemno)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : ["+itemno+"]"));
		
		//boardRepository.updateCount(no);
		
		return ResponseEntity.ok(board);
	}
	
	/*
	//increase count 
	@Transactional
	public int updateCounts(Integer no) {
        return boardRepository.updateCounts(no);
    }
	*/
	
	// update board 
	public ResponseEntity<Board> updateBoard(
			Integer itemno, Board updatedBoard) {
		Board board = boardRepository.findById(itemno)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : ["+itemno+"]"));
		board.setDivisioncode(updatedBoard.getDivisioncode());
		board.setItemtitle(updatedBoard.getItemtitle());
		board.setItemcontent(updatedBoard.getItemcontent());
		board.setItemprice(updatedBoard.getItemprice());
		board.setItemstatus(updatedBoard.isItemstatus());
		board.setItemcondition(updatedBoard.getItemcondition());
		board.setCreatedtime(new Date());
		
		Board endUpdatedBoard = boardRepository.save(board);
		return ResponseEntity.ok(endUpdatedBoard);
	}
	
	// delete board
	public ResponseEntity<Map<String, Boolean>> deleteBoard(
			Integer itemno) {
		Board board = boardRepository.findById(itemno)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : ["+itemno+"]"));
		
		boardRepository.delete(board);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted Board Data by id : ["+itemno+"]", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}	
	/*
	@Transactional   
	public int updateView(Integer no) { 
		return boardRepository.updateView(no); 
		}
	*/
}